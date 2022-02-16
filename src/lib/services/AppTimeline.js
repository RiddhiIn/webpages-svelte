import Api from "./Api";
import qs from "qs";

export const getAppTimelineFeeds = async (qsdata) => {

    const query = qs.stringify(qsdata, {
        encodeValuesOnly: true,
    });
    try {
        const res = await Api.get(`/api/app-timelines?${query}`);
        return res;
    }
    catch (error) {
        return [];
    }
};