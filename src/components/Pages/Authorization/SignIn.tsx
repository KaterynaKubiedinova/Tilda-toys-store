'use client'

import React from "react";
import styles from './SignIn.module.scss'
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { Routes } from "@/constants/routes";
import { CustomButton } from "@/components/Button/Button";
import { useAppDispatch } from "@/lib/hooks";
import { authUser } from "@/app/tools/apiService";
 
type FormInput = {
  email: string;
  password: string;
};

export function SignInPage() {
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
	const router = useRouter()
	const dispatch = useAppDispatch();

  const signUp = () => {
    router.push(Routes.Registration)
  }

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(authUser(data))
      .then((data) => {
        data && router.push(Routes.Home)
      })
      .catch((e) => {
        throw e;
      });
  };
 
  return (
    <>
      <div className={styles.formPage}>
        <div className={styles.formBlock}>
					<h1>
							Sign in
					</h1>
					<form onSubmit={handleSubmit(onSubmit)
					}>
							<div className="mb-2">
									<label htmlFor="title">
											Email
									</label>
							<input		
								{...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
								type="email"
								placeholder='Enter email'
								autoFocus />
							</div>
							<div className="mb-2">
									<label htmlFor="description" >
										Password
									</label>
							<input {...register('password', { required: true })} type="password" placeholder='Enter toy password'/>
							</div>
              <CustomButton text='Sign in' type='submit'/>
          </form>
          <CustomButton text='Sign up' type='button' handleClick={signUp}/>
				</div>
      </div>
    </>
  );
}