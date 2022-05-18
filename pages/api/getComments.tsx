import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity';
import { Comment } from '../../typing'

const commentQuery=groq`

*[_type == "comment" && references(*[_type =='tweet'&& _id == $tweetId]._id)]`

type Data= Comment[]

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {tweetId}= req.query
    const comments:Comment[]=await sanityClient.fetch(commentQuery,{
        tweetId,
    })
      console.log(">>>>>> ", comments )

  res.status(200).json(comments)

}
