"use client";
import styles from "@/styles/contact-section/checkbox.module.css";
import { useState } from "react";

// components
import SelectInput from "@/components/Form/SelectInput";
import Notification from "../../../../components/Notification";

export default function Form({ isRTL, translation, notificationTranslation }) {
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
  const [request, setRequest] = useState("none");
  const [requestError, setRequestError] = useState(false);
  const [subject, setSubject] = useState("none");
  const [subjectError, setSubjectError] = useState(false);
  const [service, setService] = useState("none");
  const [serviceError, setServiceError] = useState(false);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const services_concerned_options = [
    {
      label: translation?.service_concerned?.options?.delivery_service,
      value: "Service de Livraison",
    },
    {
      label: translation?.service_concerned?.options?.call_center,
      value: "Centre d'Appel",
    },
    {
      label: translation?.service_concerned?.options?.professional_warehousing,
      value: "Entreposage Professionnel",
    },
    {
      label: translation?.service_concerned?.options?.all_in_one_marketplace,
      value: "Marketplace Tout-en-Un",
    },
  ];

  const subject_options = [
    {
      label: translation?.request_subject?.options?.product_problem,
      value: "Problème de Produit",
    },
    {
      label: translation?.request_subject?.options?.technical_support,
      value: "Assistance Technique",
    },
    {
      label: translation?.request_subject?.options?.billing_questions,
      value: "Questions sur la Facturation",
    },
    {
      label: translation?.request_subject?.options?.customer_service,
      value: "Service Client",
    },
    {
      label: translation?.request_subject?.options?.suggestions_for_improvement,
      value: "Suggestions d'Amélioration",
    },
    {
      label: translation?.request_subject?.options?.order_tracking,
      value: "Suivi de Commande",
    },
    {
      label: translation?.request_subject?.options?.complaints,
      value: "Réclamations",
    },
    {
      label: translation?.request_subject?.options?.information_request,
      value: "Demande d'Information",
    },
    {
      label: translation?.request_subject?.options?.returns_and_refunds,
      value: "Retours et Remboursements",
    },
    {
      label: translation?.request_subject?.options?.other,
      value: "Autre",
    },
  ];

  const nature_options = [
    {
      label: translation?.request_nature?.options?.negative_request,
      value: "Demande négative",
    },
    {
      label:
        translation?.request_nature?.options?.absent_latent_or_emerging_demand,
      value: "Demande absente, latente ou naissante",
    },
    {
      label: translation?.request_nature?.options?.seasonal_irregular_demand,
      value: "Demande saisonnière / irrégulière",
    },
    {
      label: translation?.request_nature?.options?.existing_or_declining_demand,
      value: "Demande existante ou déclinante",
    },
    {
      label: translation?.request_nature?.options?.sustained_demand,
      value: "Demande soutenue",
    },
    {
      label: translation?.request_nature?.options?.excessive_demand,
      value: "Demande excessive",
    },
    {
      label: translation?.request_nature?.options?.undesirable_demand,
      value: "Demande indésirable",
    },
    {
      label: translation?.request_nature?.options?.other,
      value: "Autre",
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const isValid =
      checkName() &&
      checkPhoneNumber() &&
      checkEmail() &&
      checkRequest() &&
      checkSubject() &&
      checkService() &&
      checkComment();

    if (isValid) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone_number", phoneNumber);
      formData.append("email", email);
      formData.append("request", request);
      formData.append("subject", subject);
      formData.append("service", service);
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
    setRequest("none");
    setSubject("none");
    setService("none");
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

  const checkRequest = () => {
    if (request !== "none") {
      setRequestError(false);
      return true;
    }
    setRequestError(true);
    return false;
  };

  const checkSubject = () => {
    if (subject !== "none") {
      setSubjectError(false);
      return true;
    }
    setSubjectError(true);
    return false;
  };

  const checkService = () => {
    if (service !== "none") {
      setServiceError(false);
      return true;
    }
    setServiceError(true);
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
        className="w-full flex flex-col gap-2 relative z-50 sm:text-lg text-sm"
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

          <div className="w-[50%] flex flex-col gap-2">
            <label htmlFor="Nature" className="font-light">
              {translation?.request_nature?.label}
            </label>
            <div className="flex flex-col gap-1">
              <SelectInput
                isRTL={isRTL}
                translation={translation?.request_nature}
                ariaLabel="Nature"
                options={nature_options}
                state={request}
                setState={setRequest}
              />
              {requestError && (
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
            <label htmlFor="Subject" className="font-light">
              {translation?.request_subject?.label}
            </label>
            <div className="flex flex-col gap-1">
              <SelectInput
                isRTL={isRTL}
                translation={translation?.request_subject}
                ariaLabel="Subject"
                options={subject_options}
                state={subject}
                setState={setSubject}
              />
              {subjectError && (
                <div className="text-red-500 text-xs">
                  {translation?.input_required}
                </div>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-2">
            <label htmlFor="ServiceConcerned" className="font-light">
              {translation?.service_concerned?.label}
            </label>
            <div className="flex flex-col gap-1">
              <SelectInput
                isRTL={isRTL}
                translation={translation?.service_concerned}
                ariaLabel="ServiceConcerned"
                options={services_concerned_options}
                state={service}
                setState={setService}
              />
              {serviceError && (
                <div className="text-red-500 text-xs">
                  {translation?.input_required}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* row */}
        <div className="w-full flex justify-between sm:gap-5 gap-2">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="Comment" className="font-light">
              {translation?.comment}
            </label>
            <div className="flex flex-col gap-1">
              <textarea
                type="text"
                className="w-full rounded-2xl sm:text-sm text-xs px-5 py-2 outline-none text-[var(--main-blue-color)] placeholder:text-[var(--main-blue-color)] resize-none"
                name="comment"
                id="Comment"
                rows={8}
                placeholder={`${translation?.comment} ...`}
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

        {/* row */}
        <div className="w-full flex justify-between sm:gap-5 gap-2">
          <div className="w-full flex items-start gap-2">
            <input
              className={`${styles.checkbox_input}`}
              type="checkbox"
              name=""
              id="Condition"
            />
            <label
              htmlFor="Condition"
              className="font-light cursor-pointer text-xs"
            >
              {translation?.condition}
            </label>
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
