//              1. bakingSong = Lilly Owslby sings 🦉
//              2. supplies: data
//              3. Map over the images and
//                 bake a _ _ _
//youTubeImageTreasure
// fill your life with story and glory

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import slugify from "@sindresorhus/slugify";

const ComponentName = ({ data }) => {
  return data.allIAmAPugNode.youTubeImageTreasure.map((treasureNode, index) => {
    const gatsbyImage = getImage(treasureNode.thumnail);
    return (
      <article key={index}>
        <GatsbyImage image={gatsbyImage} alt={treasureNode.oEmbed.title} />
        <h1>
          <span className="mark">{treasureNode.oEmbed.title}</span>
        </h1>
        <br />
        <div
          className="video-container"
          dangerouslySetInnerHTML={{ __html: treasureNode.oEmbed.html }}
        />

        <p className="mark">
          Click fullscreen on the video. The tiny frame in the bottom right
          corner. To the right of "YOUTUBE".
        </p>
      </article>
    );
  });
};

export const query = graphql`
  {
    allIAmAPugNode {
      youTubeImageTreasure: nodes {
        id
        thumnail {
          childImageSharp {
            gatsbyImageData(
              width: 480
              height: 270
              layout: CONSTRAINED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
        oEmbed {
          title
          html
        }
      }
    }
  }
`;

export default ComponentName;

// import React from "react";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const ComponentName = ({ data }) => {
//   return data.allYouTube.nodes.map((node, index) => {
//     const gatsbyImage = getImage(node.thumnail);
//     return (
//       <article key={index}>
//         <GatsbyImage image={gatsbyImage} alt={node.oEmbed.title} />
//       </article>
//     );
//   });
// };

// export const query = graphql`
//   {
//     allYouTube {
//       nodes {
//         oEmbed {
//           title
//         }
//         thumnail {
//           childImageSharp {
//             gatsbyImageData(
//               width: 480
//               height: 270
//               layout: CONSTRAINED
//               transformOptions: { cropFocus: CENTER }
//             )
//           }
//         }
//       }
//     }
//   }
// `;
// export default ComponentName;
