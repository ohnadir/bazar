import { api } from "../api/baseApi";
import { getToken } from '@/lib/Token';

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/user",
                    body: data,
                }
            }
        }),
        emailVerify: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/verify-email",
                    body: data,
                }
            }
        }),
        login: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/login",
                    body: data
                }
            }
        }),
        forgotPassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/forget-password",
                    body: data
                }
            }
        }),
        resetPassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/reset-password",
                    body: data
                }
            }
        }),
        changePassword: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/auth/change-password",
                    body: data,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(getToken("token") as string)}`
                    }
                }
            }
        }),

        updateProfile: builder.mutation({
            query: (data) => {
                return{
                    method: "PATCH",
                    url: "/user",
                    body: data,
                    headers:{
                        Authorization: `Bearer ${JSON.parse(getToken("token") as string)}`
                    }
                }
            }
        }),

        profile: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/user/profile",
                    headers:{
                        Authorization: `Bearer ${JSON.parse(getToken("token") as string)}`
                    }
                }
            },
            transformResponse: (response: any) => {
                return response?.data;
            },
        }),
    })
});

export const {
    useRegisterMutation,
    useEmailVerifyMutation,
    useLoginMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
    useUpdateProfileMutation,
    useProfileQuery,
} = authSlice;