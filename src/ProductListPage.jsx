import React, { useEffect, useState } from "react"
import ProductList from './ProductList';
import { getProductList } from "./Api";
import NoMatching from './NoMatching';
import Loading from "./Loading";
import { BsSearch } from 'react-icons/bs'

function ProductListPage() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");


  useEffect(function () {
    const xyz = getProductList();
    xyz.then(function (response) {
      setProductList(response.data.products);
      setLoading(false);
    })

  }, []);




  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });


  if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value)
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />
  }
  return (


    <div className="bg-gray-400  ">
      <div className="flex px-20 justify-center ">
        <div className="p-7 my-8 bg-white shadow-md shadow-black rounded-md mt-24">
          <div className="flex justify-between justify-items-center">
            <div className="flex justify-items-center ">
              <BsSearch className="m-2 text-2xl text-indigo-600" />
              <input className="border-2 border-gray-600 hover:border-indigo-500 text-black text-center font-semibold rounded-md"
                value={query}
                onChange={handleQueryChange}
                placeholder="Search" />
            </div>
            <div className="pr-12">
              <select onChange={handleSortChange} value={sort} className="border-2 border-gray-600 hover:border-indigo-500 ml-2 rounded-md py-3 px-3">
                <option value="default">Default Sort</option>
                <option value="name">Sort By Name</option>
                <option value="price">Sort By Price</option>

              </select>
            </div>
          </div>





          {data.length > 0 && <ProductList Products={data} />}
          {data.length == 0 && <NoMatching>NO Matchinng Product</NoMatching>}


        </div>
      </div>

    </div>
  );
}

export default ProductListPage;