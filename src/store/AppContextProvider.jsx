
import { AlertProvider } from "./AlertProvider";
import { DialogProvider } from "./DialogProvider";
import { SnackbarProvider } from "notistack";
import { combineComponents } from "../util/combineComponents";
import { ResizeProvider } from "./ResizeProvider";
import { LoaderProvider } from "./LoaderProvider";

const providers = [
  SnackbarProvider,
  AlertProvider,
  ResizeProvider,
  LoaderProvider,
  DialogProvider,
];

export const AppContextProvider = combineComponents(...providers);
