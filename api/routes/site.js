const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//search

router.get("/search", async (req,res,next) => {
  var str = req.query.key;
  //Tìm kiếm dữ liệu trong database theo key
  Movie.find({title: { $regex: str, $options: 'i' }})
    .then((product) => {
      res.status(201).json(product);
    })
    .catch(next);
});

// Pagination
router.get("/pagination", async (req,res,next) => {
  var sort = req.body.sort = req.query.sort; //sắp xếp
    var page = req.query.page;//trang
    const perPage  = 6 //số sản phẩm được hiển thị trên 1 trang
    if(page){
      page = parseInt(page)//chuyển string sang int
      if(page < 1){
        page = 1
      }
      Movie.find({})//select * from product  
      .limit(perPage  * 1)//giới hạn sản phẩm được hiển thị 
      .skip((page - 1) * perPage )//bỏ qua bn sản phẩm
      .sort({price:sort})//sắp xếp tăng dần hoặc giảm dần
      .then((product) => {
        //Đếm tổng số sản phẩm hiện có trong database
        Movie.countDocuments({}).then((total) => {
          //ceil: làm tron lên, ví dụ: 2.87 -> 3
          var totalPage = Math.ceil(total / perPage );
          //render và chuyền tham dữ liệu qua trang produc để hiển thị

          res.status(201).json(product, totalPage, page);
        })
        
      })
      .catch(next);
    }
    else if(sort){
      sort = parseInt(sort)//chuyển string sang int
      if(sort == 0){
        sort = 1;
      }
      else if(sort > 1)
      {
        sort = 1;
      }
      else if(sort < -1){
        sort = -1;
      }
      Movie.find({})
      .limit(perPage  * 1)
      .skip((page - 1) * perPage )
      .sort({price: sort})
      .then((product) => {
        Movie.countDocuments({}).then((total) => {
          var totalPage = Math.ceil(total / perPage );
          res.status(201).json(product, total, page, perPage);
        })
        
      })
      .catch(next);
    }
    else
    {
      Product.find({})
      .limit(perPage * 1)
      .skip((1 - 1) * perPage)
      .sort({price: 1})
      .then((product) => {
        res.status(201).json(product);
      })
      .catch(next);
    }
});

module.exports = router;