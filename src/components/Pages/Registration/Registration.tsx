'use client'

import React from "react";
import styles from './SignUp.module.scss'
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { Routes } from "@/constants/routes";
import { CustomButton } from "@/components/Button/Button";
import { User } from "@/types/userTypes";
import { useAppDispatch } from "@/lib/hooks";
import { registerUser } from "@/app/tools/apiService";
 
export function SignUpPage() {
  const { register, handleSubmit } = useForm<User>()
	const router = useRouter()
	const dispatch = useAppDispatch()

  const signIn = () => {
    router.push(Routes.Authorisation)
  }
  
	const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(registerUser(data))
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
							Sign up
					</h1>
					<form onSubmit={handleSubmit(onSubmit)
					}>
            <div className="mb-2">
									<label htmlFor="name">
											Name
									</label>
							<input		
								{...register('name', { required: true, minLength: 3 })}
								type="text"
								placeholder='Enter your name'
								autoFocus />
            </div>
            <div className="mb-2">
									<label htmlFor="surname">
											Surname
									</label>
							<input		
								{...register('surname', { required: true, minLength: 3 })}
								type="text"
								placeholder='Enter your surname'/>
							</div>
							<div className="mb-2">
									<label htmlFor="email">
											Email
									</label>
							<input		
								{...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
								type="email"
								placeholder='Enter email'
								/>
							</div>
							<div className="mb-2">
									<label htmlFor="description" >
										Password
									</label>
							<input {...register('password', { required: true })} type="password" placeholder='Enter toy password'/>
							</div>
              <CustomButton text='Sign up' type='submit'/>
          </form>
          <CustomButton text='Sign in' type='button' handleClick={signIn}/>
				</div>
      </div>
    </>
  );
}