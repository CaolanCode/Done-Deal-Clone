export const AuthModalInputs = ({ isSignIn }: { isSignIn: boolean }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p>Email</p>
        <input type="email" className="border w-full"></input>
      </div>
      <div>
        <p>Password</p>
        <input type="password" className="border w-full"></input>
      </div>
      {isSignIn ? (
        ""
      ) : (
        <>
          <div>
            <p>Full Name</p>
            <input type="text" className="border w-full" />
          </div>
          <p className="text-[10px] text-gray-500">
            To get the most from DoneDeal, we’ll send you members-only updates
            via email, push notifications and on site messaging. You can update
            your preferences at any time from your MyDoneDeal page.
          </p>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="border" />
            <p>Yes, I agree</p>
          </div>
        </>
      )}
    </div>
  );
};
