import { useState } from 'react';

import { Buttonsiv, AuthDiv, Input, FormDiv } from './style';

function Form() {
  const [query, setQuery] = useState({
    username: '',
    twofactorauth: 'checked',
    avatar: '',
  });
  const handleFileChange = () => {};
  const handleChange = () => {};
  const handleTwoFa = () => {};

  return (
    <FormDiv>
      <form>
        <div>
          <Input
            type="text"
            id="inputUsername"
            placeholder="USERNAME"
            required
            name="username"
            value={query.username}
            onChange={handleChange()}
          />
        </div>
        <AuthDiv>
          <input
            type="checkbox"
            id="activatTwoFactorAuth"
            placeholder="Enter your name"
            required
            name="twoFact"
            value={query.twofactorauth}
            onChange={handleTwoFa()}
          />
          <p>Activate Two-factor Authentication via email</p>
        </AuthDiv>
        <Buttonsiv>
          <label>
            Add Avatar
            <input name="avatar" type="file" onChange={handleFileChange()} />
          </label>

          <button type="submit">Validate</button>
        </Buttonsiv>
      </form>
    </FormDiv>
  );
}
export default Form;
