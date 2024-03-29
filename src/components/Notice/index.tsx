import React, { FC } from 'react';

export const Notice: FC = () => {
  return (
    <div>
      <p className="lead">
        This page does not send any data to the server. All of the calculations happen right in your browser.
      </p>

      <p>We've the following parameters:</p>
      <ul>
        <li>
          Client Seed: This is a random hexadecimal string generated by your computer. The server does know about this
          client seed prior to the bet execution. Ideally, it should be freshly generated for each bet. However, some
          players have their "lucky" client seed which they prefer to keep.
        </li>
        <li>
          Server Seed: This is a random hexadecimal string generated by the server. It is not shared with the player
          (until they rotate the seed).
        </li>
        <li>
          Server Seed Hash: Since the server seed is not shared with the user, the server provides you with a hash of
          the server seed. This means that you can check (after the seed is rotated) whether the server was using the
          correct, shown server seed or not. The server seed hash is always unique and corresponds to a server seed
          being used to play games previously.
        </li>
      </ul>

      <p>
        If you are interested in checking the code behind this, please open
        <b>
          <a href={'https://github.com/basiliskgames/verifier'}> source code</a>
        </b>
      </p>
    </div>
  );
};
