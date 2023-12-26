import React, { FC } from "react";
import NcImage from "@/components/NcImage/NcImage";
import { getPostDataFromPostFragment } from "@/utils/getPostDataFromPostFragment";
import SingleHeader from "../SingleHeader";
import { FragmentType } from "@/__generated__";
import { GET_PROFESSIONALS } from "@/fragments/queries";

export interface SingleProfessionalProps {
  professional: FragmentType<typeof GET_PROFESSIONALS>;
  showRightSidebar?: boolean;
}

const SingleProfessional: FC<SingleProfessionalProps> = ({ professional, showRightSidebar }) => {
  const { title, content, date, author, databaseId, excerpt, featuredImage } =
    getPostDataFromPostFragment(professional || {});
  const hasFeaturedImage = !!featuredImage?.sourceUrl;

  return (
    <>
      <div className={`nc-PageSingle pt-8 lg:pt-16`}>
        <header className="container rounded-xl">
          <div
            className={
              !hasFeaturedImage && showRightSidebar
                ? ""
                : `max-w-screen-md mx-auto`
            }
          >
            <SingleHeader professional={{ ...professional }} />
            {!hasFeaturedImage && (
              <div className="my-5 border-b border-neutral-200 dark:border-neutral-800" />
            )}
          </div>
        </header>

        {!!hasFeaturedImage && (
          <NcImage
            alt={title}
            containerClassName="container my-10 sm:my-12"
            className="w-full rounded-xl"
            src={featuredImage?.sourceUrl || ""}
            width={featuredImage?.mediaDetails?.width || 1000}
            height={featuredImage?.mediaDetails?.height || 750}
            sizes={"(max-width: 1024px) 100vw, 1280px"}
            priority
          />
        )}
      </div>
    </>
  );
};

export default SingleProfessional;
