import { supabase } from '../../../api';


export const fetchdata = async ()=>{
    try {

        let { data, error, status } = await supabase
            .from("Reflection")
            .select(`*`)

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return data;
        }
    } catch (error) {
        alert(error.message);
    } finally {
        // console.log(user);
    }
};
