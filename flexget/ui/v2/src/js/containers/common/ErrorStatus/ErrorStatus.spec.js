import { mapStateToProps } from 'containers/common/ErrorStatus';

describe('containers/common/ErrorStatus', () => {
  it('should be correct if an error status should be displayed', () => {
    expect(mapStateToProps({ status: { error: 'Error Status' } })).toMatchSnapshot();
  });

  it('should be correct if an error status should not be displayed', () => {
    expect(mapStateToProps({ status: { } })).toMatchSnapshot();
  });
});
