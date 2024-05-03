import { AxiosResponse } from "axios";
import { IssPositionData } from "@/interfaces/iss-data"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const API_URL = 'http://api.open-notify.org/iss-now.json'

const fetchData = async (): Promise<AxiosResponse<IssPositionData>> => {
    const response = await axios.get<IssPositionData>(API_URL)


    return response;
}

export function IssPositionDayData() {
    if (typeof window !== 'undefined') {
        const query = useQuery<AxiosResponse<IssPositionData>>({
            queryFn: fetchData,
            queryKey: ['IssPositionData'],
            staleTime: 5000
        });
        return {
            ...query,
            contentData: query.data?.data,
            isPending: query.isLoading,
        };
    }
    return { data: null, isPendingIss: false };
}

