import axios from "axios";
import { useEffect, useState } from "react";


const Usefetch = (url) => {
    const [data, setDAta] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [error, setError] = useState([false]);

    useEffect(() => {
        const fetchDAta = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setDAta(res.data);
            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        fetchDAta();
    }, [url]);


    const refetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setDAta(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };
    return { data, loading, error, refetch };
};
export default Usefetch;