const appendFormDataRuleDefault = (index: number) => `files[${index}]`;

const optionsConfig = {
  accept: "",
  multiple: false,
};

export type FilesType = {
  options?: FilesOptionsTypes;
  appendFormDataRule?: (index: number) => string;
};

export type FilesOptionsTypes = {
  accept?: string;
  multiple?: boolean;
};

export const uploadFile = async ({
  options = optionsConfig,
  appendFormDataRule = appendFormDataRuleDefault,
}: FilesType = {}) => {
  return await new Promise<FormData>((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = options.accept ?? "";
    input.multiple = options.multiple ?? false;

    input.addEventListener("change", (event) => {
      if (event.currentTarget?.files) {
        const files = Array.from(event.currentTarget?.files);
        const formData = new FormData();

        files.forEach((file, index) => {
          const name = appendFormDataRule(index);

          formData.append(name, file);
        });

        input.remove();
        resolve(formData);
      }
    });

    input.click();
  });
};
