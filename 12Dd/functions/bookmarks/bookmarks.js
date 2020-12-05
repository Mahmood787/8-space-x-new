const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb')
const q = faunadb.query
require('dotenv').config()
const client = new faunadb.Client({secret:process.env.FAUNADB_SECRET})

const typeDefs = gql`
  type Query {
    bookmark: [Bookmark!]
  }
  type Bookmark {
    id: ID!
    title: String!
    url: String!
    desc: String!
  }
  type Mutation {
    addBookmark(title:String, url: String!, desc: String!) : Bookmark
  }
`

const resolvers = {
  Query: {
    bookmark: async(root,args,context) => {
      try{
      const  result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("url"))),
            q.Lambda(x=>q.Get(x))
          ) 
        )
        console.log(result)
      return result.data.map(d=>{
        return {
          title:d.data.title,
          id: d.ts,
          url: d.data.url,
          desc: d.data.desc
        }
      })
      }catch(er){
        console.log("error",er)
      }
    },
  },
  Mutation:{
    addBookmark:async(_,{title,url,desc})=>{
      console.log("url---desc",url,"desc",desc)
      try{
        const result = await client.query(
          q.Create(q.Collection("links"),{data:{title,url,desc}})
        )
        return result.ref.data
      }catch(error){
        console.log("Error :")
        console.log(error)
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
