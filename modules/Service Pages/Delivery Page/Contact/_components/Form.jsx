"use client";
import { useState } from "react";

// components
import Notification from "@/components/Notification";

export default function Form({
  isRTL,
  translation,
  notificationTranslation,
  deliveryTranslation,
}) {
  const [isNotifyActive, setIsNotifyActive] = useState(false);
  const [notifyTitle, setNotifyTitle] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [notifyColor, setNotifyColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const isValid =
      checkName() && checkPhoneNumber() && checkEmail() && checkComment();

    if (isValid) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone_number", phoneNumber);
      formData.append("email", email);
      formData.append("service", "Livraison");
      formData.append("comment", comment);

      try {
        const response = await fetch("/api/contact", {
          method: "post",
          body: formData,
        });
        if (!response.ok) {
          NotifyInternalError();
          return;
        }

        NotifySuccess();
      } catch (err) {
        NotifyInternalError();
      } finally {
        setIsLoading(false);
        resetForm();
      }
    } else {
      setIsLoading(false);
    }
  }

  // Resetting Fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setComment("");
  };

  // Make Failed Notification
  const NotifyInternalError = () => {
    setNotifyTitle(notificationTranslation?.failed);
    setNotifyMessage(notificationTranslation?.internal_error);
    setNotifyColor("border-red-500");
    setIsNotifyActive(true);
    setTimeout(() => {
      setIsNotifyActive(false);
    }, 3000);
  };

  // Make Success Notification
  const NotifySuccess = () => {
    setNotifyTitle(notificationTranslation?.success);
    setNotifyMessage(notificationTranslation?.message_sent);
    setNotifyColor("border-green-500");
    setIsNotifyActive(true);
    setTimeout(() => {
      setIsNotifyActive(false);
    }, 3000);
  };

  // checking Fields
  const checkName = () => {
    if (name) {
      setNameError(false);
      return true;
    }
    setNameError(true);
    return false;
  };

  const checkPhoneNumber = () => {
    if (phoneNumber) {
      setPhoneNumberError(false);
      return true;
    }
    setPhoneNumberError(true);
    return false;
  };

  const checkEmail = () => {
    if (email) {
      setEmailError(false);
      return true;
    }
    setEmailError(true);
    return false;
  };

  const checkComment = () => {
    if (comment) {
      setCommentError(false);
      return true;
    }
    setCommentError(true);
    return false;
  };

  return (
    <div className="sm:w-[600px] w-full h-full flex justify-center items-center bg-[var(--main-blue-color)] rounded-2xl text-white sm:p-10 py-5 px-3 relative">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-7 relative z-50 sm:text-lg text-sm"
      >
        {/* row */}
        <div className="w-full flex justify-between sm:gap-5 gap-2">
          <div className="w-[50%] flex flex-col gap-2">
            <label htmlFor="FullName" className="font-light">
              {translation?.full_name}
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                className="w-full rounded-full sm:text-sm text-xs px-5 py-2 outline-none text-[var(--main-blue-color)] placeholder:text-[var(--main-blue-color)]"
                name="full_name"
                id="FullName"
                placeholder={`${translation?.full_name} ...`}
                required
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              {nameError && (
                <div className="text-red-500 text-xs">
                  {translation?.input_required}
                </div>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-2">
            <label htmlFor="PhoneNumber" className="font-light">
              {translation?.phone_number}
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                inputMode="numeric"
                className="w-full rounded-full sm:text-sm text-xs px-5 py-2 outline-none text-[var(--main-blue-color)] placeholder:text-[var(--main-blue-color)]"
                name="phone_number"
                id="PhoneNumber"
                placeholder={`${translation?.phone_number} ...`}
                required
                value={phoneNumber}
                onChange={({ target }) => setPhoneNumber(target.value)}
              />
              {phoneNumberError && (
                <div className="text-red-500 text-xs">
                  {translation?.input_required}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* row */}
        <div className="w-full flex justify-between sm:gap-5 gap-2">
          <div className="w-[50%] flex flex-col gap-2">
            <label htmlFor="Address" className="font-light">
              {translation?.email}
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                className="w-full rounded-full sm:text-sm text-xs px-5 py-2 outline-none text-[var(--main-blue-color)] placeholder:text-[var(--main-blue-color)]"
                name="email"
                id="Address"
                placeholder={`${translation?.email} ...`}
                required
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              {emailError && (
                <div className="text-red-500 text-xs">
                  {translation?.input_required}
                </div>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-2"></div>
        </div>

        {/* row */}
        <div className="w-full flex justify-between sm:gap-5 gap-2">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="Comment" className="font-light">
              {deliveryTranslation?.delivery_message}
            </label>
            <div className="flex flex-col gap-1">
              <textarea
                type="text"
                className="w-full rounded-2xl sm:text-sm text-xs px-5 py-2 outline-none text-[var(--main-blue-color)] placeholder:text-[var(--main-blue-color)] resize-none"
                name="comment"
                id="Comment"
                rows={8}
                placeholder={`${deliveryTranslation?.delivery_message} ...`}
                required
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
              {commentError && (
                <div className="text-red-500 text-xs">
                  {translation?.input_required}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* submit */}
        <div className="w-full flex justify-end font-light">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-[var(--main-orange-color)] rounded-full px-6 py-2 hover:opacity-[.9] duration-300"
          >
            {isLoading ? translation?.sending : translation?.submit}
          </button>
        </div>
      </form>

      {/* shape */}
      <div
        className={`w-[150px] h-[150px] bg-[var(--main-orange-color)] absolute bottom-0 after:content-[''] after:absolute after:w-full after:h-full after:bg-[var(--main-blue-color)] ${
          isRTL
            ? "right-0 rounded-br-2xl after:rounded-br-full"
            : "left-0 rounded-bl-2xl after:rounded-bl-full"
        }`}
      ></div>

      {isNotifyActive && (
        <Notification
          title={notifyTitle}
          message={notifyMessage}
          color={notifyColor}
          setIsNotifyActive={setIsNotifyActive}
          isRTL={isRTL}
        />
      )}
    </div>
  );
}
