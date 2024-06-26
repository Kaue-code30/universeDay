import { AxiosResponse } from "axios";
import { IssPositionData } from "@/interfaces/iss-data"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const API_URL = 'http://api.open-notify.org/iss-now.json'

const fetchData = async (): Promise<AxiosResponse<IssPositionData>> => {
    const response = await axios.get<IssPositionData>(API_URL)
    console.log(response.data.iss_position);
    

    return response;
}

export function IssPositionDayData() {
    if (typeof window !== 'undefined') {
        const query = useQuery<AxiosResponse<IssPositionData>>({
            queryFn: fetchData,
            queryKey: ['IssPositionData'],
            staleTime: 5000,
            gcTime: 5000

        });
        return {
            ...query,
            contentData: query.data?.data,
            isPendingIss: query.isPending,
        };
    }
    return { data: null, isPendingIss: true };
}

