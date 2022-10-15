import { render, screen } from '@testing-library/react';
import React from 'react';
import { ChildrenProvider } from './ChildrenContext';
import { withDefaultChildren } from './with-default-children';

describe('with default children', function () {
  it('should use default children from context when component children prop is not presented', function () {
    const Div = withDefaultChildren('div');
    render(
      <ChildrenProvider value={<span>from context</span>}>
        <Div />
      </ChildrenProvider>,
    );
    expect(screen.getByText('from context')).toBeInTheDocument();
  });
  it('should use children prop when component children prop is not presented', function () {
    const Div = withDefaultChildren('div');
    render(
      <ChildrenProvider value={<span>from context</span>}>
        <Div>
          <span>from prop</span>
        </Div>
      </ChildrenProvider>,
    );
    expect(screen.getByText('from prop')).toBeInTheDocument();
    expect(screen.queryByText('from context')).not.toBeInTheDocument();
  });
  it('should not throw error if children is null', () => {
    const Div = withDefaultChildren('div');
    render(
      <ChildrenProvider value={null}>
        <Div />
      </ChildrenProvider>,
    );
  });
  it('should not throw error if prop children is provided', () => {
    const Div = withDefaultChildren('div');
    render(<Div />);
    render(<Div>{null}</Div>);
    render(<Div>some children</Div>);
  });
  it('should have proper display name', function () {
    const Div = withDefaultChildren('div');

    expect(Div.displayName).toBe('WithDefaultChildren(div)');

    function Button() {
      return <button>save</button>;
    }
    const ButtonWithChildren = withDefaultChildren(Button);

    expect(ButtonWithChildren.displayName).toBe('WithDefaultChildren(Button)');

    const ComponentWithChildren = withDefaultChildren(function () {
      return <span>Hi</span>;
    });

    expect(ComponentWithChildren.displayName).toBe(
      'WithDefaultChildren(Component)',
    );
  });
});
