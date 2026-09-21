"use client";

import { useState, type FormEvent } from "react";
import { UploadIcon } from "@/components/icons";
import { site } from "@/lib/site";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "file";
  required?: boolean;
};

/**
 * V0 stand-in for the live site's form service (backend and recipient unknown, CNV-02 / Q-10):
 * submitting opens the visitor's mail client addressed to the live site's own e-mail address.
 */
export function MailForm({
  fields,
  submit,
  subject,
  inline,
}: {
  fields: FieldDef[];
  submit: string;
  subject: string;
  inline?: boolean;
}) {
  const [files, setFiles] = useState(0);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = fields
      .filter((f) => f.type !== "file")
      .map((f) => `${f.label.replace("*", "")}: ${String(data.get(f.name) ?? "")}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={inline ? "newsletter" : "form"} onSubmit={onSubmit}>
      {fields.map((f) => {
        const id = `f-${subject}-${f.name}`.replace(/\s+/g, "-");
        return (
          <div className="field" key={f.name}>
            {f.type === "file" ? (
              <div className="file">
                <input
                  id={id}
                  name={f.name}
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files?.length ?? 0)}
                />
                <label htmlFor={id}>
                  <UploadIcon />
                  {f.label}
                </label>
                <span>Ekler ({files})</span>
              </div>
            ) : (
              <>
                <label htmlFor={id}>{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea id={id} name={f.name} rows={6} required={f.required} />
                ) : (
                  <input
                    id={id}
                    name={f.name}
                    type={f.type ?? "text"}
                    required={f.required}
                    autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : "off"}
                  />
                )}
              </>
            )}
          </div>
        );
      })}
      <button className="btn" type="submit">
        {submit}
      </button>
    </form>
  );
}
