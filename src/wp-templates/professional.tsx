import { gql } from "@apollo/client";
import { FaustTemplate } from "@faustwp/core";
import PageLayout from "@/container/PageLayout";
import SingleProfessional from "@/container/singles/single/SingleProfessional";
import { GET_PROFESSIONALS } from "@/fragments/queries";
import { GetProfessionalPageQuery } from "@/__generated__/graphql";
import { FOOTER_LOCATION, PRIMARY_LOCATION } from "@/contains/menu";

const Component: FaustTemplate<GetProfessionalPageQuery> = (props) => {
  if (props.loading) {
    return <>Loading...</>;
  }

  const professional = props.data?.professional;
  const headerMenuItems = props.data?.primaryMenuItems?.nodes || [];
  const footerMenuItems = props.data?.footerMenuItems?.nodes || [];
  const generalSettings = props.data?.generalSettings;

  return (
    <PageLayout
      headerMenuItems={headerMenuItems}
      footerMenuItems={footerMenuItems}
      generalSettings={generalSettings}
    >
      {professional ? <SingleProfessional professional={professional} /> : <div>Error: Professional data could not be loaded.</div>}
    </PageLayout>
  );
};

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
    headerLocation: PRIMARY_LOCATION,
    footerLocation: FOOTER_LOCATION,
  };
};

Component.query = gql`${GET_PROFESSIONALS}`;

export default Component;
