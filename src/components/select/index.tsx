import React, { ComponentProps, ElementRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";

type SelectProps = ComponentProps<typeof SelectPrimitive.Root>;

export const Select = React.forwardRef<
  ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        ref={forwardedRef}
        className="inline-flex h-9 w-32 items-center justify-between rounded border px-4 text-xs focus:outline-none"
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDownIcon className="h-6 w-6 text-white" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="w-32 overflow-hidden rounded bg-white shadow">
          <SelectPrimitive.ScrollUpButton>
            <ChevronUpIcon className="h-6 w-6 text-gray-800" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton>
            <ChevronDownIcon className="h-6 w-6 text-gray-800" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;

export const SelectItem = React.forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      {...props}
      ref={forwardedRef}
      className="flex h-9 cursor-pointer items-center gap-1 px-4 text-xs text-gray-800 hover:bg-gray-100 focus:outline-none"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4 text-gray-800" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});
