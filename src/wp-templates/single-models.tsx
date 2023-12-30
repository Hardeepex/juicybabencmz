import { gql } from '@apollo/client';
import { FaustTemplate } from '@faustwp/core';

const SingleModel: FaustTemplate = (props) => {
  const { title, content } = props.data.nodeByUri;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

SingleModel.variables = ({ uri }) => {
  return { uri };
};

SingleModel.query = gql`
  query GetModelByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentEditor {
        content
      }
    }
  }
`;

export default SingleModel;
