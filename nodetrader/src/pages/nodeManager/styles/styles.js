import { tw } from "twind";

export const nodeStyles = {
  container: tw("rounded-md bg-white shadow-xl"),
  header: (bgColor) => tw(`rounded-t-md px-2 py-1 ${bgColor} text-white text-sm`),
  label: tw("text-xs font-bold mb-2"),
  fieldContainer: tw("flex flex-col px-2 py-1"),
  inputField: tw("nodrag"),
  divider: tw("border-gray-200 mx-2"),
  handle: tw("w-2 h-2"),
};
