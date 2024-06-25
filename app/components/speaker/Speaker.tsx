"use client";

import { Text } from "@/app/components/text";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type SpeakerElement = React.ElementRef<"div">;
export type SpeakerProps = React.ComponentPropsWithoutRef<"div"> & {
  imageSrc: string | StaticImport;
  name: string;
  position: string;
  company: string;
};

export const Speaker = React.forwardRef<SpeakerElement, SpeakerProps>(
  (props, ref) => {
    const { className, imageSrc, name, position, company, ...restProps } =
      props;
    return (
      <div
        className={classNames(
          className,
          "flex flex-col gap-4 items-start shrink-0",
        )}
        ref={ref}
        {...restProps}
      >
        <div className="relative overflow-hidden justify-content-center items-center">
          <div
            className="absolute inset-0 -z-10 rounded-full"
            style={{ background: "linear-gradient(#E434A5, #348AEB)" }}
          ></div>
          <Image
            className="object-cover rounded-full z-10 w-[200] h-[200] border-4 border-transparent"
            src={imageSrc}
            alt={name}
            title={name}
            width={200}
            height={200}
          />
        </div>
        <div className={"flex flex-col gap-1 self-stretch"}>
          <Text textType={"sub_title"} className={"font-bold"}>
            {name}
          </Text>
          <Text textType={"paragraph"}>
            {position}, {company}
          </Text>
        </div>
      </div>
    );
  },
);

Speaker.displayName = "Speaker";
