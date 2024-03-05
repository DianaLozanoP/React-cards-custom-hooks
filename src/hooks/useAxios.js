import axios from "axios";
import { useEffect, useState } from "react"
import { v1 as uuid } from "uuid";

const useAxios = (url) => {
    const [data, setData] = useState([]);

    const fetchData = async (name) => {
        try {
            let res;
            if (name) {
                const urlName = `${url}${name}/`
                res = await axios.get(urlName)
            }
            else {
                res = await axios.get(url)
            }
            setData((preData) => [...preData, { data: res.data, id: uuid() }])
        }
        catch (e) {
            console.error("Error fetching data", e)
        }
    }
    const addData = async (name) => {
        await fetchData(name);
    }

    return [data, addData]
}

export default useAxios;