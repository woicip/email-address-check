"use strict";
function mailInputCheck(email) {
    if (!email.includes('@')) {
        return [true, 'Alamat email tidak valid'];
    }
    else {
        const [address, domain] = email.split('@');
        const domainIndex = domain.indexOf('.');
        if (!domain.includes('.') || domain[domainIndex + 1] === undefined) {
            return [true, "Domain email tidak valid"];
        }
        else {
            return [false, ""];
        }
    }
}
