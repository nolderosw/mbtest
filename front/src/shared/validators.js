export const validateEmail = (email) => {
  if (email.length <= 0) {
    return false;
  }
  const [emailPart, domain] = email.split("@");
  if (!emailPart || !domain) {
    return false;
  }
  if (domain.indexOf(".") === -1) {
    return false;
  }
  return true;
};

export const validateName = (name) => {
   return name.length >= 3
}

export const validateCpf = (cpf) => {
    if (cpf.length !== 14) {
        return false;
    }
    if (cpf[3] !== '.' || cpf[7] !== '.' || cpf[11] !== '-' || isNaN(cpf.replace(/\D/g, ''))) {
        return false;
    }
    const cleanCpf = cpf.replace(/\D/g, '');
    return cleanCpf.length === 11 && !isNaN(cleanCpf);
}

export const validateCnpj = (cnpj) => {
    if (cnpj.length !== 18) {
        return false;
    }
    if (cnpj[2] !== '.' || cnpj[6] !== '.' || cnpj[10] !== '/' || cnpj[15] !== '-' || isNaN(cnpj.replace(/\D/g, ''))) {
        return false;
    }
    const cleanCnpj = cnpj.replace(/\D/g, '');
    return cleanCnpj.length === 14 && !isNaN(cleanCnpj);
}

export const validateDate = (date) => {
    const inputDate = new Date(date).getTime();
    const today = new Date().getTime();
    return inputDate <= today;
}

export const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 11) {
        return false;
    }
    const ddd = phone[0] === '(' && phone[3] === ')';
    const hyphen = phone[9] === '-';

    return ddd && hyphen;
}

export const validatePassword = (password) => {
    return password.length >= 3
}
