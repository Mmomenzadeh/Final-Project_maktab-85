import { Input } from "Components";
import { Header } from "Layouts";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { SiHotjar } from "react-icons/si";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { EscBtn } from "Utils/EscBtn";
import "../../Assets/Styles/Components/Search/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FilterData } from "API";

export const Search = ({ setShowSearchBox }) => {
  const { productData } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  // name_like=${text} ---> answer

  // useEffect(() => {
  //   dispatch(FilterData(""))
  // }, []);

  const [searchItem, setsearchItem] = useState(false);
  const handleSearch = (e) => {
    setsearchItem(true);
    if (e.target.value === "") {
      setsearchItem(false);
    }
    // console.log();
  };

  const closeHandle = () => {
    setShowSearchBox(false);
  };

  return (
    <>
      <div className="SearchModal">
        <div className="SearchModal__Container">
          <div className="flex j-sb">
            <Input
              type="search "
              holder="جستجوی محصولات"
              inpType="searchBox-Home-large"
              onChange={(e) => handleSearch(e)}
              onkeydown={(e) => EscBtn(e, setShowSearchBox)}
            />
            {searchItem ? (
              <RiCloseCircleLine
                size="2rem"
                className="pointer"
                onClick={closeHandle}
              />
            ) : (
              <BiSearchAlt size="2rem" color="#444" />
            )}
          </div>
          <div className="L-blue mt-1 mb-1"></div>

          {searchItem ? (
            <div className="SearchModal__Container__searchItems">
              <div className="flex col gap-1 mb-3 pointer">
                <div className="flex gap-1 a-c">
                  <BiSearchAlt size="2rem" color="var(--gray-200)" />
                  <p className="fs-12">intel kaby cpu</p>
                </div>
                <p className="mr-3 fs-1 gray-300">
                  در دسته <span className="fs-1 bold blue-100"> لپ تاپ </span>
                </p>
              </div>

              <div className="flex col gap-1 mb-3 pointer">
                <Link className="flex gap-1 a-c  link gray-400">
                  <BiSearchAlt size="2rem" color="var(--gray-200)" />
                  <p className="fs-12">intel kaby cpu</p>
                </Link>
                <Link className="mr-3 fs-1 gray-300 link">
                  در دسته <span className="fs-1 bold blue-100"> لپ تاپ </span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex col mt-2">
              <p className="flex gap a-c">
                <SiHotjar size={"2rem"} color="var(--gray-200)" />
                <span className="fs-11 bold gray-400">جستجویی پرطرفدار</span>
              </p>
              <div className="flex gap">
                <Link
                  className=" SearchModal__Container__hotSearch  flex gap a-c mt-2"
                  to={``}
                >
                  <p className="fs-1 bold">گوشی Galaxy A53 5G</p>
                  <IoIosArrowBack size="1.5rem" />
                </Link>
                <Link
                  className=" SearchModal__Container__hotSearch flex gap a-c mt-2"
                  to={``}
                >
                  <p className="fs-1 bold">لپ تاپ ZenBook Flip 13</p>
                  <IoIosArrowBack size="1.5rem" />
                </Link>
                <Link
                  className=" SearchModal__Container__hotSearch flex gap a-c mt-2"
                  to={``}
                >
                  <p className="fs-1 bold"> گوشی iphone 11 </p>
                  <IoIosArrowBack size="1.5rem" />
                </Link>
                <Link
                  className=" SearchModal__Container__hotSearch flex gap a-c mt-2"
                  to={``}
                >
                  <p className="fs-1 bold">هدفون Earbuds2</p>
                  <IoIosArrowBack size="1.5rem" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
