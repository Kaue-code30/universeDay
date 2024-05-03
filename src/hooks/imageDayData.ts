// No arquivo imageDayData.ts

import { AxiosResponse } from "axios";
import { ImageDayData, ImageDayDataResponse } from "@/interfaces/image-data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=ZK3UtzVpL38ZVddwp2fBb1EkGBbqCD1hGhzmNcfU'

const fetchData = async (): Promise<AxiosResponse<ImageDayData>> => {
    const response = await axios.get<ImageDayData>(API_URL)
    return response;
}

export function imageDayData() {

    if (typeof window !== 'undefined') {
        const query = useQuery<AxiosResponse<ImageDayData>>({
            queryFn: fetchData,
            queryKey: ['image-data']
        })
        return {
            ...query,
            contentData: query.data?.data,
             isPending: query.isPending
        }
    }
    return { data: null, isPending: false };
}
