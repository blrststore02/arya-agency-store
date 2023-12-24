import { RestEndPService } from "@/api/restClient.service";
import { AxiosError } from "axios";
import { toast } from "@/components/aAToast";

export const SettingsService = () => {
    const restEndPService = RestEndPService();
    const getAppliationSettings = async () => {
        let response: any = {};
        let isLoading: boolean = true;
        let error: any = {
            message: ""
        };
        try {
            response = await restEndPService.get(`/logo/${1}`).then((response: { data: any; }) => response.data);
        } catch (err: AxiosError | unknown) {
            if (err instanceof AxiosError) {
                error = { message: err.message };
            } else {
                error = { message: error || "Please wait a few minutes before you try again!!!" };
            }
            toast.notify(`Error: ${error.message}`, { type: 'error', duration: 50 });
        } finally {
            isLoading = false;
        }
        return [response, isLoading];
    }

    return {
        getAppliationSettings
    };
}
