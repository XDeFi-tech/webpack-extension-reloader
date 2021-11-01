import { assert } from "chai";
import { SinonStub, spy, stub } from "sinon";
import * as webpack from "webpack";
import ExtensionReloaderImpl from "../src/ExtensionReloader";
import { IExtensionReloaderInstance } from "../typings/webpack-extension-reloader";

describe("ExtensionReloader", () => {
  const envCopy = { ...process.env };

  const registerStub = stub(
    ExtensionReloaderImpl.prototype,
    "_registerPlugin",
  ).returns();
  const versionCheckSpy = spy(ExtensionReloaderImpl.prototype._isWebpackGToEV4);

  beforeEach(() => {
    registerStub.reset();
    versionCheckSpy.resetHistory();
    process.env = { ...envCopy };
  });
});
