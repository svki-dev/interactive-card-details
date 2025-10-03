export function sanitizeDigits(value) {
    return (value || '').replace(/\D+/g, '');
}

export function formatCardNumber(value) {
    const digits = sanitizeDigits(value).slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
}

export function luhnCheck(cardNumber) {
    const digits = sanitizeDigits(cardNumber);
    if (digits.length < 12) return false; // minimal plausible length before 16
    let sum = 0;
    let shouldDouble = false;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        let d = parseInt(digits[i], 10);
        if (Number.isNaN(d)) return false;
        if (shouldDouble) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        sum += d;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
}

export function formatExpiryMonth(value) {
    const digits = sanitizeDigits(value).slice(0, 2);
    if (digits.length === 0) return '';
    let month = parseInt(digits, 10);
    if (Number.isNaN(month)) return '';
    if (month <= 0) month = 1;
    if (month > 12) month = 12;
    return String(month).padStart(2, '0');
}

export function formatExpiryYear(value) {
    const digits = sanitizeDigits(value).slice(0, 2);
    return digits.padStart(2, digits.length ? '0' : '');
}

export function isExpiryValid(mm, yy) {
    const m = parseInt(mm, 10);
    const y = parseInt(yy, 10);
    if (Number.isNaN(m) || Number.isNaN(y)) return false;
    if (m < 1 || m > 12) return false;
    // assume YY within 00..99, map to 2000..2099 for comparison
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1; // 1..12
    if (y < currentYear) return false;
    if (y === currentYear && m < currentMonth) return false;
    return true;
}

export function formatCVC(value) {
    return sanitizeDigits(value).slice(0, 3);
}


