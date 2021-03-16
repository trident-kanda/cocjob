import { ApolloClient, InMemoryCache ,gql} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://us-central1-testyou-23df2.cloudfunctions.net/graphql',
    cache: new InMemoryCache()
});

export const getSkill = async(id:number) => {
const skill = await client
.query({
    query: gql`
      query{
        job(id:${id}){
          skill
        }
      }
    `
  })
  .then((result)=>{
    return result.data.job.skill
  });
 return skill
}