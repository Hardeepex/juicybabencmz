import { gql } from '@apollo/client';
import { FaustTemplate } from '@faustwp/core';
import Link from 'next/link';

const ArchiveModels: FaustTemplate = (props) => {
  const { label, contentNodes } = props.data.nodeByUri;

  return (
    <>
      <h1>{label} Archive</h1>

      <ul>
        {contentNodes.nodes.map((node) => (
          <li key={node.databaseId}>
            <Link href={node.uri}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

ArchiveModels.variables = ({ uri }) => {
  return { uri };
};

ArchiveModels.query = gql`
  query ModelArchive($uri: String!) {
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
