"use client";

import { ChakraProvider as NativeChakraProvider } from "@chakra-ui/react";
import { system } from "@/lib/theme";

export default function ChakraProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NativeChakraProvider value={system}>{children}</NativeChakraProvider>;
}
