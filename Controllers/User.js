const { User, Thought } = require('../models');
module.exports = {
    async getUsers(req, res){
        try{
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    };

    async getSingleUser(req, res){
        try{
            const user = await User.findone({_id: req.params.userId})
            .select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'No User Found' });
              }
        
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async addFriend(req, res){
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {runValidator: true, new: true,}
            );
            if (!user) {
                return res.status(404).json({message: 'No User Found'});
              }
          
              res.json(user);
        } catch (err) {
              res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { _id: req.params.friendsId } } },
            { runValidators: true, new: true, overwrite:true}
          );
      
          if (!user) {
            return res.status(404).json({ message: 'No User Found' });
          }
      
          res.json(application);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    };


















