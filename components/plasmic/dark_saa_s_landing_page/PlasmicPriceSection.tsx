// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jpMEBTjRtpxfYXKCrLMc5Q
// Component: pCaF4HoCu-73

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import PriceCard from "../../PriceCard"; // plasmic-import: jbl5wdhPqSQq/component

import { useScreenVariants as useScreenVariantsiuriY4TFKlwN } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: IuriY4tFKlwN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: jpMEBTjRtpxfYXKCrLMc5Q/projectcss
import sty from "./PlasmicPriceSection.module.css"; // plasmic-import: pCaF4HoCu-73/css

createPlasmicElementProxy;

export type PlasmicPriceSection__VariantMembers = {};
export type PlasmicPriceSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicPriceSection__VariantsArgs;
export const PlasmicPriceSection__VariantProps = new Array<VariantPropType>();

export type PlasmicPriceSection__ArgsType = {};
type ArgPropType = keyof PlasmicPriceSection__ArgsType;
export const PlasmicPriceSection__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceSection__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultPriceSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPriceSection__RenderFunc(props: {
  variants: PlasmicPriceSection__VariantsArgs;
  args: PlasmicPriceSection__ArgsType;
  overrides: PlasmicPriceSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsiuriY4TFKlwN()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__u2IrW)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__bY4Mm)}>
          <PriceCard
            borders={["flatLeft"]}
            className={classNames("__wab_instance", sty.priceCard___5DN81)}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__amDl9)}>
          <div className={classNames(projectcss.all, sty.freeBox__bs0OA)}>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"We Recommended"}
            </div>
          </div>
          <PriceCard
            borders={["flatCenter"]}
            className={classNames("__wab_instance", sty.priceCard___7SjVr)}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__zTmSz)}>
          <PriceCard
            borders={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ["flatRight"]
                : ["flatRight"]
            }
            className={classNames("__wab_instance", sty.priceCard__szHPi)}
          />
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceSection__VariantsArgs;
    args?: PlasmicPriceSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPriceSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPriceSection__ArgProps,
          internalVariantPropNames: PlasmicPriceSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceSection";
  } else {
    func.displayName = `PlasmicPriceSection.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceSection = Object.assign(
  // Top-level PlasmicPriceSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicPriceSection
    internalVariantProps: PlasmicPriceSection__VariantProps,
    internalArgProps: PlasmicPriceSection__ArgProps
  }
);

export default PlasmicPriceSection;
/* prettier-ignore-end */
