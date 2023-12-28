export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat(
        'tr-TR', {
            style: 'currency',
            currency: 'TRY' // Türk Lirası için currency kodu TRY olmalıdır.
        }
    ).format(amount);
};
