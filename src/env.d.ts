import { TypedPocketBase } from "./pocketbase-types";

declare global {
  namespace App {
    interface Locals {
      pb: TypedPocketBase;
    }
  }

  interface ImportMetaEnv {
    readonly PB_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
