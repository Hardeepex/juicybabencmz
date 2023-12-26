import { gql } from "../__generated__";
import { GetProfessionalQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import Professional from "@/container/singles/professional/Professional";

const Component: FaustTemplate<GetProfessionalQuery> = (props) => {
  if (props.loading) {
    return <>Loading...</>;
  }

  const professional = props.data?.professional;

  if (!professional) {
    return <>Professional not found</>;
  }

  return <Professional professional={professional} />;
};

Component.query = gql`
  query GetProfessional($databaseId: ID!) {
    professional(id: $databaseId, idType: DATABASE_ID) {
      ...ProfessionalFields
    }
  }
`;

export default Component;
