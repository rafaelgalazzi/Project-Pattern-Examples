import { errorHandler } from './commom/WrapperErrorHandler';
import { decoratorPatternLambda } from './Decorator/DecoratorFunctionImplementation';
import { proxyPatternLambda } from './Proxy/ProxyFunctionImplementation';
import { observerPatternLambda } from './Observer/ObserverFunctionImplementation';
import { facadePatternLambda } from './Facade/FacadeFunctionImplementation';
import { singletonPatternLambda } from './Singleton/SingletonFunctionImplementation';

export const decoratorPatternExample = errorHandler(decoratorPatternLambda);

export const facadePatternExample = errorHandler(facadePatternLambda);

export const proxyPatternExample = errorHandler(proxyPatternLambda);

export const observerPatternExample = errorHandler(observerPatternLambda);

export const singletonPatternExample = errorHandler(singletonPatternLambda);
