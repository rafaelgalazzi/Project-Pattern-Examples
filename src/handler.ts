import { errorHandler } from './commom/WrapperErrorHandler';
import { decoratorPatternFunction } from './Decorator/DecoratorFunctionImplementation';
import { proxyPatternFunction } from './Proxy/ProxyFunctionImplementation';
import { observerPatternFunction } from './Observer/ObserverFunctionImplementation';
import { facadePatternFunction } from './Facade/FacadeFunctionImplementation';
import { singletonPatternFunction } from './Singleton/SingletonFunctionImplementation';

export const decoratorPatternExample = errorHandler(decoratorPatternFunction);

export const proxyPatternExample = errorHandler(proxyPatternFunction);

export const observerPatternExample = errorHandler(observerPatternFunction);

export const facadePatternExample = errorHandler(facadePatternFunction);

export const singletonPatternExample = errorHandler(singletonPatternFunction);
