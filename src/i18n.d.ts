import {
  type defaultNS,
  type supportedLngs,
} from "app/providers/with-lang/config";
import { type resources } from "app/providers/with-lang/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)[(typeof supportedLngs)[number]];
  }
}
