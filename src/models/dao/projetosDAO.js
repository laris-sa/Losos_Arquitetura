//src/models/dao/projetosDAO.js

class cluster0DAO {
  static async getProjetos(client) {
    try {
      const cursor = await client
        .db('db')
        .collection('projetos')
        .find({})
        .project({_id : 0});
      const result = await cursor.toArray();
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      await client.close()
    }
  }

    static async getProjetoByRota(client, rota) {
      try {
        const result = await client
          .db('db')
          .collection('projetos')
          .findOne({ rota: rota }, { _id: 0 });
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }

  static async insertProjeto(client, projeto) {
    try {
      const result = await client
        .db('db')
        .collection('projetos')
        .insertOne(projeto);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

}
module.exports = cluster0DAO;