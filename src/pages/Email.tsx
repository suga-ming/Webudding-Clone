import { useForm } from "react-hook-form";
import styled from "styled-components";
import { emailSignUp, SignUpInterface } from "../api/User";

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  height: 35px;
  margin-top: 7px;
  padding-left: 10px;
  ::placeholder {
    font-size: 13px;
  }
`;

const Email = () => {
  const { register, handleSubmit, reset } = useForm<SignUpInterface>();
  const onSubmit = async (data: SignUpInterface) => {
    const res = await emailSignUp(data);
    const resultCode = res?.data.data.resultCode;
    if (resultCode === 1) alert("회원가입 성공");
    else if (resultCode === 1001) alert("이미 존재하는 계정입니다");
    else if (resultCode === 1101) alert("회원가입에 실패했습니다");
    // reset({
    //   email: "",
    //   password: "",
    //   name: "",
    //   gender: "",
    //   phone: "",
    // });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="mt-6 font-semibold text-xl">회원 정보 입력</div>
      <article className="flex flex-col w-72 mt-5">
        <label>아이디</label>
        <Input {...register("email")} placeholder="ex)kby9901@naver.com" />
      </article>
      <article className="flex flex-col w-72 mt-5">
        <label>비밀번호</label>
        <Input
          {...register("password")}
          placeholder="비밀번호를 입력해주세요."
        />
      </article>
      <article className="flex flex-col w-72 mt-5">
        <label>이름</label>
        <Input {...register("name")} placeholder="이름을 입력해주세요" />
      </article>
      <article className="flex flex-col w-72 mt-5">
        <label>성별</label>
        <Input {...register("gender")} placeholder="성별을 입력해주세요" />
      </article>
      <article className="flex flex-col w-72 mt-5">
        <label>핸드폰번호</label>
        <Input {...register("phone")} placeholder="핸드폰번호를 입력해주세요" />
      </article>
      <div
        onClick={handleSubmit(onSubmit)}
        className="mt-6 w-72 bg-we_pink max-w-[318px] h-11 rounded-lg text-white flex justify-center items-center font-semibold"
      >
        가입하기
      </div>
    </form>
  );
};

export default Email;
