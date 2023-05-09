import Image from "next/image";

type Props = {
    validation: {
        numChar: boolean;
        capital: boolean;
        numerical: boolean;
        special: boolean;
        overall: boolean;
    };
};

function PasswordValidationUI({ validation }: Props) {
    const validationArray = [
        {
            display: "Must be 8 characters long",
            status: validation?.numChar,
        },
        {
            display: "Must have one or more capital letters",
            status: validation?.capital,
        },
        {
            display: "Must have one or more numerical characters",
            status: validation?.numerical,
        },
        {
            display: "Must have one or more special characters",
            status: validation?.special,
        },
    ];
    return (
        <div className="relative -top-5">
            {validationArray.map((item) => (
                <p
                    key={JSON.stringify(item)}
                    className={`text-xs flex-start flex-row gap-3 ${
                        item.status ? "text-green-700" : "text-red-500"
                    } `}
                >
                    {item.status ? (
                        <Image
                            src="/assets/images/check-mark.jpg"
                            alt="check"
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src="/assets/images/x-mark.jpg"
                            alt="wrong"
                            width={18}
                            height={18}
                        />
                    )}

                    {item.display}
                </p>
            ))}
        </div>
    );
}

export default PasswordValidationUI;
