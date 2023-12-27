import { gql } from "@/__generated__";
import ArchiveContent from "@/container/archive/ArchiveContent";
import PageLayout from "@/container/PageLayout";
import { FOOTER_LOCATION, PRIMARY_LOCATION } from "@/contains/menu";

const ArchiveModels = (props) => {
  const { label, contentNodes } = props.data.nodeByUri;

  return (
    <>
      <PageLayout
        headerMenuItems={props.data?.primaryMenuItems?.nodes || []}
        footerMenuItems={props.data?.footerMenuItems?.nodes || []}
        pageTitle={label}
        generalSettings={props.data?.generalSettings}
      >
        <div className="container">
          <main>
            <ul>
              {contentNodes.nodes.map((node) => (
                <ArchiveContent key={node.databaseId} node={node} />
              ))}
            </ul>
          </main>
        </div>
      </PageLayout>
    </>
  );
};

ArchiveModels.variables = ({ uri }) => {
  return { uri };
};

ArchiveModels.query = gql`
  query ArchiveModels($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on ContentType {
        label
        description
        contentNodes {
          nodes {
            databaseId
            uri
            ... on NodeWithTitle {
              title
            }
          }
        }
      }
    }
  }
`;

export default ArchiveModels;
