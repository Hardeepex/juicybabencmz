import { gql } from "../__generated__";
import {
  GetPostSiglePageQuery,
  NcgeneralSettingsFieldsFragmentFragment,
} from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import SingleContent from "@/container/singles/SingleContent";
import PageLayout from "@/container/PageLayout";
import { FOOTER_LOCATION, PRIMARY_LOCATION } from "@/contains/menu";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

const SingleModel: FaustTemplate<GetPostSiglePageQuery> = (props) => {
  const [isUpdateViewCount, setIsUpdateViewCount] = useState(false);

  useEffect(() => {
    setIsUpdateViewCount(true);
  }, []);

  const _post = props.data?.post || {};

  const {
    title,
    ncPostMetaData,
    postFormats,
    featuredImage,
    databaseId,
    excerpt,
  } = _post;

  const renderHeaderType = () => {
    // Add logic to return appropriate JSX based on postFormats and ncPostMetaData
  };

  return (
    <>
      <PageLayout
        headerMenuItems={props.data?.primaryMenuItems?.nodes || []}
        footerMenuItems={props.data?.footerMenuItems?.nodes || []}
        pageFeaturedImageUrl={featuredImage?.sourceUrl}
        pageTitle={title}
        pageDescription={excerpt || ""}
        generalSettings={
          props.data?.generalSettings as NcgeneralSettingsFieldsFragmentFragment
        }
      >
        {renderHeaderType()}
      </PageLayout>
    </>
  );
};

SingleModel.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    post_databaseId: Number(databaseId || 0),
    asPreview: ctx?.asPreview,
    headerLocation: PRIMARY_LOCATION,
    footerLocation: FOOTER_LOCATION,
  };
};

SingleModel.query = gql(`
  query GetModelByUri($databaseId: ID!, $post_databaseId: Int,$asPreview: Boolean = false, $headerLocation: MenuLocationEnum!, $footerLocation: MenuLocationEnum!) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      // Add fields to fetch for the model
    }
  }
`);

export default SingleModel;
